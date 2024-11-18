import { generatedOrderText } from "@/common/constant";
import { routesLink } from "@/common/routes";
import { toast } from "react-toastify";
interface OrderDetails {
  code: string;
  status: string;
  name: string;
  price: string;
  image: string;
}
export const generateOrder = (  productCode: string,
    setOrders: React.Dispatch<React.SetStateAction<OrderDetails[]>>,
    orders: OrderDetails[]) => {
 
    const storedProduct = localStorage.getItem(generatedOrderText.selectedProduct);
    if (storedProduct) {
      const productData = JSON.parse(storedProduct);
      if (productData.code === productCode) {
        const newOrder = {
          code: productCode,
          status: generatedOrderText.processing,
          name: productData.name,
          price: productData.price,
          image: productData.image,
        };
        const updatedOrders = [...orders, newOrder];
        setOrders(updatedOrders);
        localStorage.setItem(
          generatedOrderText.orders,
          JSON.stringify(updatedOrders)
        );
        toast.success(generatedOrderText.OrderGenerated);
        setTimeout(() => {
          window.location.href = routesLink.invoice;
        }, 2000);
      } else {
        toast.error(generatedOrderText.productCodeDoesNotMatch);
      }
    } else {
      toast.success(generatedOrderText.pleasePasteTheProductCode);
    }
  };