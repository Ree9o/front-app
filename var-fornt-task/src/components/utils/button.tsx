import Link from "next/link";

type ButtonProps = {
  path: string;
  text: string;
  isPrimary: boolean;
  className?: string;
};

export default function Button(props: ButtonProps) {
  return (
    <div>
      <Link href={props.path}>
        <button
          className={
            props.isPrimary
              ? `primary-btn ${props.className}`
              : `secondary-btn ${props.className}`
          }
        >
          {" "}
          {props.text}
        </button>{" "}
      </Link>
    </div>
  );
}
