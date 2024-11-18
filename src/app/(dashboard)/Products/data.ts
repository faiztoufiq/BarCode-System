import { listDataText, productsText } from "@/common/constant";
import { routesLink } from "@/common/routes";
import { toast } from "react-toastify";


interface Product {
    id: number;
    name: string;
    code: string;
    image: string;
    price:number;
  }
  export const copyToClipboard = (product: any) => {
    navigator.clipboard.writeText(product.code);
    localStorage.setItem(productsText.selectedProduct, JSON.stringify(product));
    toast.success(`Product code ${product.code} copied to clipboard!`);
  };

export const data: Product[] = [
    {id: 1,image: routesLink.earBurdsLink,price:10,name: listDataText.earBurds,code: listDataText.PROD_A,},
    { id: 2, name: listDataText.cocaCola, code: listDataText.PROD_B, image: routesLink.cocaColaLink,price:10, },
    { id: 3, name: listDataText.powerTool, code: listDataText.PROD_C, image: routesLink.powerToolLink,price:20, },
    { id: 4, name: listDataText.ketchUp, code: listDataText.PROD_D, image: routesLink.ketchUpLink,price:30, },
    { id: 5, name: listDataText.wifiRouter, code: listDataText.PROD_E, image: routesLink.wifiRouterLink ,price:21,},
    { id: 6, name: listDataText.Camera, code: listDataText.PROD_F, image: routesLink.cameraLink,price:44, },
    { id: 7, name: listDataText.sugerLess, code: listDataText.PROD_G, image: routesLink.sugarLessLink,price:53,},
    { id: 8, name: listDataText.skinCare, code: listDataText.PROD_H, image: routesLink.skinCareLink ,price:21,},
    { id: 9, name: listDataText.choclate, code: listDataText.PROD_I, image: routesLink.choclateLink ,price:18,},
    { id: 10,name: listDataText.headphone, code: listDataText.PROD_J, image: routesLink.headPhoneLink,price:59, },
    { id: 11,name: listDataText.Oats, code: listDataText.PROD_K, image: routesLink.oatsLink ,price:100,},
    { id: 12,name: listDataText.velo, code: listDataText.PROD_L, image: routesLink.veliLink ,price:18,},
    { id: 13,name: listDataText.milk, code: listDataText.PROD_M, image: routesLink.milkLink,price:59, }, 
    { id: 14,name: listDataText.beautyProduct, code: listDataText.PROD_N, image: routesLink.beautyProductLink ,price:100,},
  ];
  
  