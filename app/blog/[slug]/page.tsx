type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">ブログ記事ページ</h1>
      <p className="mt-4 text-lg">
        この記事のslugは:{" "}
        <span className="font-mono bg-gray-200 p-1 rounded">{slug}</span> です。
      </p>
    </main>
  );
}
