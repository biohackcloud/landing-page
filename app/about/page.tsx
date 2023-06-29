"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Page() {
    const currentRoute = usePathname();
    return (
        <section>
            <div>
                <h2 className=" text-[1.5em] font-bold text-highlight">
                    What is the BioHackCloud?
                </h2>
                <p className=" text-[1.5em] font-light">
                    The BioHackCloud is an entry point to use cloud services
                    for various use cases that bioinformaticians typically
                    face.
                </p>
                <h2 className=" text-[1.5em] font-bold text-highlight">
                    What can one do with the BioHackCloud?
                </h2>
                <p className=" text-[1.5em] font-light">
                    See the
                    <Link
                        className=" font-bold text-highlight"
                        href={"/docs"}
                    > documentation </Link>
                    for supported use cases. New use cases will be continuously
                    added.
                </p>
                <h2 className=" text-[1.5em] font-bold text-highlight">
                    Who can use the BioHackCloud?
                </h2>
                <p className=" text-[1.5em] font-light">
                    The BioHackCloud is available exclusively for participants
                    of BioHackathon events. If you want to use it, please
                    <Link
                        className=" font-bold text-highlight"
                        href={"/use-case"}
                    > submit a use case </Link>
                    .
                </p>
                <h2 className=" text-[1.5em] font-bold text-highlight">
                    Who is building the BioHackCloud?
                </h2>
                <p className=" text-[1.5em] font-light">
                    The BioHackCloud is built by the BioHackathon community.
                    If you are interested in contributing, please
                    <Link
                        className=" font-bold text-highlight"
                        href={"/collaborate"}
                    > sign up </Link>
                    .
                </p>
            </div>
        </section>
    );
}
