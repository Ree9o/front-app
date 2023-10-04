"user client";
import { useRouter } from "next/router";

export default function News() {
  const router = useRouter();
  return (
    <>
      <div>news post_id:{router.query.id}</div>
    </>
  );
}
