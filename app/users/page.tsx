// app/users/page.tsx
// ユーザーのデータがどのような形か、あらかじめ型を決めておきます
interface User {
  id: number;
  name: string;
  email: string;
}

// ユーザー一覧を表示するページコンポーネント
export default async function UsersPage() {
  // 1. 外部のAPIにデータをリクエストする
  // awaitは、データが届くまでここで処理を待つ、という意味です
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' })

  // 2. 受け取ったデータをプログラムで使える形に変換する
  const users: User[] = await res.json();

  // 3. 取得したデータを使って画面を組み立てる
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">ユーザー一覧</h1>
      <ul>
        {/* users配列の各要素を順番に取り出してリスト表示する */}
        {users.map((user) => (
          <li key={user.id} className="border-b p-2">
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}