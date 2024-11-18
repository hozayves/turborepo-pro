import Category from "../components/(category)/Category";
import ProductPopular from "../components/(popularPro)/ProductPro";
export default function Page(): JSX.Element {

  return (
    <div className="bg-background text-center h-screen">
      <Category />
      <ProductPopular />
    </div>
  )
}
