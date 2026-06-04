'use client'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function UserBadge({ id }: { id: number }) {
  const { data, error } = useSWR(`/api/users/${id}`, fetcher)
  if (error) return <span>取得失敗</span>
  if (!data) return <span>読み込み中…</span>
  return <span>{data.name}</span>
}