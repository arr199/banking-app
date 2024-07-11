import { mockCards } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

interface RightSideBarProps {
  user: User;
}

export default function RightSideBar({ user }: RightSideBarProps): JSX.Element {
  return (
    <div className="max-xl:hidden flex flex-col w-[400px] border-l p-0 m-0">
      <div className="relative h-32 w-full">
        <Image
          className="object-cover"
          src="/icons/gradient-mesh.svg"
          alt="gradient"
          fill
        />
      </div>
      <section className="relative ">
        {/* INITIALS BADGE */}
        <div
          className={`border-white text-4xl font-bold text-blue-400 shadow-[0px_0px_11px_2px_#eeeeee] 
            border-[7px] w-20 h-20 grid place-items-center rounded-full bg-gray-100
             -translate-y-1/2 translate-x-5 uppercase`}
        >
          {user.firstName[0]}
        </div>
        {/* INFO */}
        <div className="px-4">
          <h3 className="font-bold text-xl">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-xs text-muted-foreground font-semibold">
            {user.email}
          </p>
          <div className="mt-10 w-full ">
            <div className="flex justify-between items-end ">
              <span className="font-bold">My Banks</span>
              <span className="text-xs font-semibold text-muted-foreground cursor-pointer hover:underline underline-offset-2">
                + Add Bank
              </span>
            </div>
            <Cards user={user} cards={mockCards}></Cards>
          </div>
        </div>
      </section>
    </div>
  );
}

interface CardsProps {
  user: User;
  cards: Card[];
}

function Cards({ user, cards }: CardsProps) {
  return (
    <div className="flex flex-col w-full h-full mt-10 text-white  ">
      <div className="flex w-full h-[160px]  ">
        {/* LEFT */}
        <div className="bg-blue-400 w-[80%] h-full rounded-l-lg p-2 flex flex-col justify-between ">
          <div className="flex flex-col">
            <span className="text-xs font-semibold mt-2">
              {user.firstName} {user.lastName}
            </span>
            <span className="text-xs font-semibold mt-1">
              {formatPrice(cards[0].balance)}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div className=" flex items-end justify-between text-[0.65rem]">
              <span className="font-semibold self-end">
                {user.firstName} {user.lastName}
              </span>
              <span>** / **</span>
            </div>
            <span className="">**** **** **** 1234</span>
          </div>
        </div>
        {/* RIGHT */}
        <div className=" bg-blue-500 w-[20%] h-full rounded-r-lg relative p-4 flex flex-col justify-between items-center">
          <div className="relative size-[22px]">
            <Image
              className="opacity-70 "
              src={"/icons/Paypass.svg"}
              alt="Paypass"
              fill
            ></Image>
          </div>
          <div className="relative size-[35px]">
            <Image
              className="opacity-90"
              src={"/icons/mastercard.svg"}
              fill
              alt="mastercard"
            ></Image>
          </div>
          {/* <div className="card-right-area"></div> */}
        </div>
      </div>
    </div>
  );
}
