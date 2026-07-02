// import "./../globals.css";
// import Script from "next/script";
import Header from "@/components/nav/Header/page";
import Footer from "@/components/nav/Footer/page";

export default function PartnershipsLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}
