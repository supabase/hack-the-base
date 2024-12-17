"use client"

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { BulletinCard } from './bulletin-card';

const supabase = createClient();

export default function Bulletins() {
  const [bulletins, setBulletins] = useState<any[]>([]);

  useEffect(() => {

    async function fetchBulletins() {
      const { data, error } = await supabase
        .from('bulletins')
        .select('*')
        .gt('date', '2001-01-01');

      if (error) {
        console.error('Error fetching bulletins:', error);
      } else {
        setBulletins(data);
      }
    }

    fetchBulletins();
  }, []);

  return (
    <ol className="flex flex-col gap-6">
      {bulletins.map((bulletin) => (
        <BulletinCard
          key={bulletin.id}
          title={bulletin.title}
          imagePath={bulletin.image_path}
          date={new Date(bulletin.date).toLocaleDateString()}
        >
          <div dangerouslySetInnerHTML={{ __html: bulletin.content }} />
        </BulletinCard>
      ))}
      <div className="hidden">flag::easy::aecd9d79901a1251f845897b310c74b7e71d2531</div>
    </ol>
  );
}
