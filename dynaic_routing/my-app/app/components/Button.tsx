'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
export function ButtonDestructive(props:any) {
           const router = useRouter();
  return (
<div className="flex justify-center items-center">
<Button className="text-center" variant="destructive" onClick={()=>router.push(`${props.address}`)}>{props.name}</Button>
</div>
)
}
