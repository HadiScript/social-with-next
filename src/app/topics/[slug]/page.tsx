import PostCreateForm from "@/components/post/post-create-form";

interface thisPageProps {
  params: {
    slug: string;
  };
}

export default function TopicShowPage({ params }: thisPageProps) {
  const { slug } = params;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb2">{slug}</h1>
      </div>

      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
