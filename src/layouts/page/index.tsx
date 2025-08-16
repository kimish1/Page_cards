
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Content from "../../components/Content/content.tsx";

const Page = () =>{
    return (
        <div className="wrapper">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
export default Page