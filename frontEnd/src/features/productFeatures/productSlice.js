import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { getBrands, getProductsUrl } from "../../constants/url";

const sortBySize = (value) => productItems.items.filter((item) => item.size.includes(value))
const sortByAvailability = (value) => productItems.items.filter((item) => item.inStock === value)

const tagsSort = (productItems) => {
    let sorted = productItems.items;
    let allItems = productItems.items
    // console.log(current(productItems.currentCategory),"check currenting")
    
    if (productItems.currentCategory[0]) {
        sorted = allItems.filter((item,index) => item.category.includes(productItems.currentCategory[0]))
   
    }

    (productItems.currentTags.availabilities["In Stock"] && productItems.currentTags.availabilities["Out Of Stock"]) ||  (!productItems.currentTags.availabilities["In Stock"] && !productItems.currentTags.availabilities["Out Of Stock"]) ? sorted = sorted : productItems.currentTags.availabilities["In Stock"] ? sorted = sorted.filter((item,index) => item.inStock === true) : sorted = sorted.filter((item,index) => item.inStock === false)

    let size = productItems.currentTags.size

    Object.entries(size).forEach(([key,value]) => {
        if(value) {
            sorted = sorted.filter((item,index) => item.size.includes(key))
        }
    })

    productItems.categoriesSort = sorted;
}

const productItems = {
    type: 'product',
    items: [],
    isLoading: "true",
    categoriesSort: {},
    currentCategory: [null,"Products"],
    featuredItems: [],
    bestSellers: [],
    latestProducts: [],
    saleProducts: [],
    popularProducts: [],
    currentTags:
        {
            "availabilities" : {"In Stock" : false,"Out Of Stock" : false},
            "size" : {"XS" : false, "S" : false, "M" : false,"L":false,"XL": false,"XXL":false,"Small":false,"Medium":false,"Large" : false,"Extra Large" : false,"3XL": false,"38mm" : false,"42mm" : false} 
        },
    tagsList: []
}

const url = `http://localhost:8080${getProductsUrl}`;

export const getProducts = createAsyncThunk(`${getProductsUrl}`, () => {
    return axios.get(url).then(({ data }) => {
        return data
    }).catch((err) => console.log(err))
})

const productSlice = createSlice({
    name: "products",
    initialState: productItems,
    reducers: {
        checkLoading: (productItems) => {
            productItems.isLoading ? productItems.isLoading = true : productItems.isLoading = false;

        },
        deleteTags:(productItems,{payload}) => {
            productItems.tagsList = productItems.tagsList.filter((item,index) => item !== payload)
            let size = productItems.currentTags.size
            let avail = productItems.currentTags.availabilities
            let check = false;
            Object.entries(size).forEach(item => {
                if(item[0] === payload){
                    productItems.currentTags.size[item[0]] = false;
                    check = true
                }
            })
            if(!check){
                Object.entries(avail).forEach(item => {
                    if(item[0] === payload){
                        productItems.currentTags.availabilities[item[0]] = false;
                        check = true
                    }
                })
            }
        },
        changeTagChecks: (productItems, { payload }) => {
            // console.log("check")
          
            if(payload && payload[0] !== "product"){
                    productItems.currentTags[[payload[0]]][payload[1]] = !productItems.currentTags[[payload[0]]][payload[1]]
                // console.log(productItems.tagsList.includes(payload[2]),"checkernoe")
                productItems.tagsList.includes(payload[1]) ? productItems.tagsList = productItems.tagsList.filter((item) =>
                    item !== payload[1]
                ) : productItems.tagsList.push(payload[1])
                // console.log(current(productItems.tagsList,"taglist"))
            }
                tagsSort(productItems)
            
        },
        clearFilters:(productItems)=>{
            let avail = productItems.currentTags.availabilities ;
            let size = productItems.currentTags.size ;
            Object.entries(avail).forEach((item) => {
                productItems.currentTags.availabilities[item[0]] = false
            })
            Object.entries(size).forEach((item) => {
                productItems.currentTags.size[item[0]] = false
            })
            // console.log(current(avail),"avail")
            productItems.currentTags.availabilities = avail
            productItems.currentTags.size = size
            productItems.currentCategory = [null,"Products"],
            productItems.tagsList = []
            // console.log( productItems.currentTags.availabilities["In Stock"],"check rmove")
        },
        checkCategory: (productItems, { payload }) => {
            let arr = []
            if ((typeof payload) == "object") {
                if (payload[2] !== getBrands) {
                    productItems.items.forEach((item, index) => {
                        item.category.forEach((category, index) => {
                            if (category === payload[0]) {
                                arr.push(item)
                            }
                        })
                    });
                    productItems.categoriesSort = arr;
                    productItems.currentCategory[0] = payload[0];
                    productItems.currentCategory[1] = payload[1];
                } else {
                    productItems.categoriesSort = productItems.items.filter((item) => item.brand === payload[0])
                    productItems.currentCategory[0] = payload[0];
                    productItems.currentCategory[1] = payload[1];
                }
            } else {
                productItems.currentCategory[1] = payload;
            }
            // console.log(current(productItems.currentTags,'current'))
            // productItems.currentTags.push(payload[1]);
        },
        sortByTags: (productItems, { payload }) => {
            payload[1] === "inStock" ? payload[1] = true : payload[1] = false
            // console.log("on run")
            switch (payload[0]) {
                case "size": productItems.categoriesSort = sortBySize("size", payload[1])
                    break

                case "availabilities": productItems.categoriesSort = sortByAvailability(payload[1])
                    break
                default:
            }
        },
        checkBrand: (productItems, { payload }) => {
            productItems.currentCategory[1] = productItems.items.filter((item) => item.brand === payload)
            productItems.currentCategory[0] = null;
        },
        getAllProducts: (productItems) => {
            productItems.categoriesSort = productItems.items;
        },
        checkStock: (productItems, { payload }) => {

        },
        getFeatured: (productItems) => {
            productItems.featuredItems = productItems.items;
            productItems.featuredItems = productItems.featuredItems.sort((a, b) => b.created_at - a.created_at);
            productItems.featuredItems = productItems.featuredItems.slice(0, 4);
            productItems.latestProducts = productItems.featuredItems.slice(0, 3);
            // console.log(current(productItems.LatestProducts),'slice')
        },
        getBestSellers: (productItems) => {
            productItems.bestSellers = productItems.items;
            productItems.bestSellers = productItems.bestSellers.sort((a, b) => b.visitedCount - a.visitedCount);
            productItems.bestSellers = productItems.bestSellers.slice(0, 4);
            productItems.popularProducts = productItems.bestSellers.slice(0, 3);
            // console.log(current(productItems.bestSellers),'best');
        },
        getSaleProducts: (productItems) => {
            productItems.saleProducts = productItems.items;
            productItems.saleProducts = productItems.saleProducts.sort((a, b) => a.price - b.price);
            productItems.saleProducts = productItems.saleProducts.slice(0, 3);
        },
        getFilteredProducts: (productItems, { payload }) => {
            // const check = productItems.items.filter((item) => );

        }
    },
    extraReducers: {
        [getProducts.pending]: (productItems) => {
            productItems.isLoading = true;
        },
        [getProducts.fulfilled]: (productItems, { payload }) => {
            productItems.items = payload;
            productItems.categoriesSort = payload;
            productItems.isLoading = false;
        },
        [getProducts.rejected]: ({ payload }) => {
            console.log(payload.err);
        }
    }
})
export const { checkLoading, checkCategory, getFeatured, getBestSellers, getSaleProducts, getAllProducts, checkBrand, sortByTags, changeTagChecks,deleteTags,clearFilters } = productSlice.actions;

export default productSlice.reducer;


