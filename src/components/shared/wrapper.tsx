import { cn } from "@/lib/utils";

interface WrapperProps extends React.DialogHTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export default function Wrapper({
  className,
  children,
  ...rest
}: WrapperProps): JSX.Element {
  return (
    <div {...rest} className={cn("p-8 max-w-[1400px]", className)}>
      {children}
    </div>
  );
}
