import React from "react";

export default function Users() {
  return <div>Users</div>;
}

export function Users() {
  return;
}

export interface UsersProps {
  prop: string;
}

export default function Users({ prop }: UsersProps) {
  return;
}
