//* Layout importation
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import LandingPageBody from "./components/layout/LandingPageBody"
//* Fetch util importation
import { useProductStore } from "./components/store/useProductStore"

function App() {
    const { data } = useProductStore()

    return (
        <>
            <Header />
            <LandingPageBody />
            <Footer />
        </>
    )
}
export default App
