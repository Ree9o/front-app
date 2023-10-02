import Link from "next/link"

type ButtonProps = {
    path: string
    text: string
    isPrimary: boolean
    className?: string
}

export default function Button(props : ButtonProps ) {
  return (
    <Link href={props.path}><a><button className={props.isPrimary ? `primary-btn ${props.className}` :`secondary-btn ${props.className}` }> {props.text}</button></a> </Link>
  )
}
