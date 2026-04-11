import { notFound } from "next/navigation";

// Redirect unknown slugs to 404
export default function TeamMemberPage() {
  notFound();
}
