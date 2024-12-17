import { createClient } from "@/utils/supabase/client";

export function BulletinCard({
  title,
  children,
  imagePath,
  date,
}: {
  title: string;
  children: React.ReactNode;
  imagePath: string;
  date: string;
}) {
  const supabase = createClient();
  const { data: imageUrl } = supabase.storage.from('university-news').getPublicUrl(imagePath);

  return (
    <li className="relative flex items-start">
      <img
      src={imageUrl.publicUrl}
      alt={title}
      className="w-40 h-auto mr-4 object-contain"
      />
      <div>
        <label
          htmlFor={title}
          className={`relative text-base text-foreground peer-checked:line-through font-medium`}
        >
          <span className="ml-8">{title}</span>
          <div className="ml-8 text-sm font-normal">
          {date}
          </div>
          <div
          className={`ml-8 text-sm peer-checked:line-through font-normal text-muted-foreground`}
          >
          {children}
          </div>
        </label>
      </div>
    </li>
  );
}
