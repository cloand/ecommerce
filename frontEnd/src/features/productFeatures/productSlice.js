import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { getBrands, getProductsUrl } from "../../constants/url";

const sortBySize = (value) => productItems.items.filter((item) => item.size.includes(value))
const sortByAvailability = (value) => productItems.items.filter((item) => item.inStock === value)

const tagsSort = (productItems) => {
    let sorted = productItems.items;
    let allItems = productItems.items
    // console.log(current(productItems.currentCategory),"check currenting")
    // console.log(productItems.currentCategory[0], "category current")

    if (productItems.currentCategory[0]) {
        sorted = allItems.filter((item, index) => item.category.includes(productItems.currentCategory[0]))
    }

    (productItems.currentTags.availabilities["In Stock"] && productItems.currentTags.availabilities["Out Of Stock"]) || (!productItems.currentTags.availabilities["In Stock"] && !productItems.currentTags.availabilities["Out Of Stock"]) ? sorted = sorted : productItems.currentTags.availabilities["In Stock"] ? sorted = sorted.filter((item, index) => item.inStock === true) : sorted = sorted.filter((item, index) => item.inStock === false)

    let size = productItems.currentTags.size
    let sizeResult = []
    let get = true;

    Object.entries(size).forEach(([key, value]) => {
        if (value) {
            let check = [];
            check = sorted.filter((item, index) => item.size.includes(key))
            if (check.length > 0) {
                check.forEach((checker) => {
                    if (sizeResult.length > 0) {
                        if (sizeResult.includes(checker) === false) {
                            sizeResult.push(checker)
                        }
                    } else {
                        sizeResult.push(checker)
                    }
                })
            }
            get = false
        }
    })

    if (!get) {
        sorted = sizeResult;
    }


    let color = productItems.currentTags.color
    let colorResult = []
    let set = true;

    Object.entries(color).forEach(([key, value]) => {
        if (value) {
            let check = [];
            check = sorted.filter((item, index) => item.color.includes(key))
            if (check.length > 0) {
                check.forEach((checker) => {
                    if (colorResult.length > 0) {
                        if (colorResult.includes(checker) === false) {
                            colorResult.push(checker)
                        }
                    } else {
                        colorResult.push(checker)
                    }
                })
            }
            set = false
        }
    })
    // console.log(colorResult,"size")
    if (!set) {
        sorted = colorResult;
    }

    let brandResult = [];
    let checker = false;

    productItems.brandChecker.forEach((item, i) => {
        if (item) {
            let check = sorted.filter((sort, index) => sort.brand === productItems.brandList[i]._id)
            check.forEach((checker, index) => {
                if (brandResult.filter((item, index) => item._id === checker._id).length === 0) {
                    brandResult.push(checker);
                }
            })
            checker = true;
        }
    })
    if (checker) {
        sorted = brandResult
    }

    productItems.categoriesSort = sorted;
    productItems.displaySort = sorted;
    // console.log(productItems.categoriesSort,"pending states")
    // console.log("running again")
}

const productItems = {
    type: 'product',
    items: [],
    isLoading: "true",
    categoriesSort: {},
    displaySort: [],
    currentCategory: [null, "Products"],
    featuredItems: [],
    bestSellers: [],
    latestProducts: [],
    saleProducts: [],
    popularProducts: [],
    currentTags:
    {
        "availabilities": { "In Stock": false, "Out Of Stock": false },
        "size": { "XS": false, "S": false, "M": false, "L": false, "XL": false, "XXL": false, "Small": false, "Medium": false, "Large": false, "Extra Large": false, "3XL": false, "38mm": false, "42mm": false },
        "color": { "blue": false, "pink": false, "red": false, "green": false, "white": false, "orange": false, "pink": false, "yellow": false, "grey": false, "black": false },
    },
    tagsList: [],
    brandList: [],
    brandChecker: [],
    categoryList: [],
    sortBy: "Alphabatically, A-Z"
}

const url = `http://localhost:8080${getProductsUrl}`;

export const getProducts = createAsyncThunk(`${getProductsUrl}`, () => {
    return axios.get(url).then(({ data }) => {
        // console.log('check on data')
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
        deleteTags: (productItems, { payload }) => {
            // console.log("check delete")
            productItems.tagsList = productItems.tagsList.filter((item, index) => item !== payload)
            let size = productItems.currentTags.size
            let avail = productItems.currentTags.availabilities
            let color = productItems.currentTags.color
            let check = false;
            Object.entries(size).forEach(item => {
                if (item[0] === payload) {
                    productItems.currentTags.size[item[0]] = false;
                    check = true
                }
            })
            if (!check) {
                Object.entries(avail).forEach(item => {
                    if (item[0] === payload) {
                        productItems.currentTags.availabilities[item[0]] = false;
                        check = true
                    }
                })
            }
            if (!check) {
                Object.entries(color).forEach(item => {
                    if (item[0] === payload) {
                        productItems.currentTags.color[item[0]] = false;
                        check = true
                    }
                })
            }
            if (!check) {
                productItems.brandList.forEach((item, index) => {
                    if (!check && item.name === payload) {
                        productItems.brandChecker[index] = false;
                    }
                })
            }
        },
        checkByParams: (productItems, { payload }) => {
            let check = false;
            // console.log("check params run")
            productItems.brandList.forEach((brand, index) => {
                if (brand.slug === payload) {
                    productItems.brandChecker[index] = true;
                    // if(!productItems.tagsList.includes(brand.name)){
                    //     productItems.tagsList.push(brand.name)
                    // }
                    check = true;
                }
            })
            if (!check) {
                productItems.categoryList.forEach((category,index) => {
                    if(category.slug === payload){
                        productItems.currentCategory[0] = category._id
                        productItems.currentCategory[1] = category.name
                        check = true;
                    }
                })
            }
            // console.log( current(productItems.currentCategory),"check immer")
        },
        changeTagChecks: (productItems, { payload }) => {
            if (payload && payload[0] !== "product") {
                productItems.currentTags[[payload[0]]][payload[1]] = !productItems.currentTags[[payload[0]]][payload[1]]
                // console.log(productItems.tagsList.includes(payload[2]),"checkernoe")
                productItems.tagsList.includes(payload[1]) ? productItems.tagsList = productItems.tagsList.filter((item) =>
                    item !== payload[1]
                ) : productItems.tagsList.push(payload[1])
                // console.log(current(productItems.tagsList,"taglist"))
            }
            // console.log("running tag checks")
            tagsSort(productItems)

        },
        clearFilters: (productItems) => {
            let avail = productItems.currentTags.availabilities;
            let size = productItems.currentTags.size;
            Object.entries(avail).forEach((item) => {
                productItems.currentTags.availabilities[item[0]] = false
            })
            Object.entries(size).forEach((item) => {
                productItems.currentTags.size[item[0]] = false
            })
            // console.log(current(avail),"avail")
            productItems.currentTags.availabilities = avail
            productItems.currentTags.size = size
            productItems.currentCategory = [null, "Products"],
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
                    productItems.displaySort = arr;
                    productItems.currentCategory[0] = payload[0];
                    productItems.currentCategory[1] = payload[1];

                } else {
                    productItems.categoriesSort = productItems.items.filter((item) => item.brand === payload[0])
                    productItems.displaySort = productItems.categoriesSort
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
                    productItems.displaySort = productItems.categoriesSort
                    break

                case "availabilities": productItems.categoriesSort = sortByAvailability(payload[1])
                    productItems.displaySort = productItems.categoriesSort
                    break
                default: null
            }
        },
        sortByPrice: (productItems, { payload }) => {
            productItems.categoriesSort = productItems.displaySort.filter((item, index) => item.price < payload[1] && item.price > payload[0])
            // console.log(current(productItems.displaySort),"display")
        },
        getBrandList: (productItems, { payload }) => {
            productItems.brandList = payload;
            for (let i = 0; i < payload.length; i++) {
                productItems.brandChecker.push(false);
            }
            // console.log(productItems.brandList)
        },
        getCategoryList: (productItems, { payload }) => {
            productItems.categoryList = payload;
        },
        changeBrandChecker: (productItems, { payload }) => {
            // console.log(typeof payload,'new check')
            if(typeof payload === "object"){
                productItems.brandChecker.forEach((item,index) => productItems.brandChecker[index] = false)
                productItems.brandChecker[payload] = !productItems.brandChecker[payload];
                // console.log(current(productItems.brandChecker,'check items params'))
            }else{

                productItems.brandChecker[payload] = !productItems.brandChecker[payload];
                if (!productItems.tagsList.includes(productItems.brandList[payload].name)) {
                    productItems.tagsList.push(productItems.brandList[payload].name)
                } else {
                    productItems.tagsList.splice(productItems.tagsList.indexOf(productItems.brandList[payload].name), 1)
                }
            }
        }
        ,
        checkSortBy: (productItems, { payload }) => {
            switch (payload) {
                case "Alphabatically, A-Z": productItems.categoriesSort.sort((a, b) => a.name.localeCompare(b.name));
                    productItems.displaySort = productItems.categoriesSort
                    break;

                case "Alphabatically, Z-A": productItems.categoriesSort.sort((a, b) => b.name.localeCompare(a.name));
                    productItems.displaySort = productItems.categoriesSort
                    break;

                case "Price, Low to High": productItems.categoriesSort.sort((a, b) => a.price - b.price);
                    productItems.displaySort = productItems.categoriesSort
                    break;

                case "Price, high to low": productItems.categoriesSort.sort((a, b) => b.price - a.price);
                    productItems.displaySort = productItems.categoriesSort
                    break;

                case "Date, old to new": productItems.categoriesSort.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    productItems.displaySort = productItems.categoriesSort
                    break;

                case "Date, new to old": productItems.categoriesSort.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                    productItems.displaySort = productItems.categoriesSort
                    break;

                default: null
            }
            productItems.sortBy = payload;
        },
        checkBrand: (productItems, { payload }) => {
            productItems.currentCategory[1] = productItems.items.filter((item) => item.brand === payload)
            productItems.currentCategory[0] = null;
        },
        getAllProducts: (productItems) => {
            productItems.categoriesSort = productItems.items;
            productItems.displaySort = productItems.categoriesSort
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
        },
        clearAll:(productItems)=>{
            productItems.brandChecker.forEach((item,index) => {
                productItems.brandChecker[index] = false;
            })
            Object.entries(productItems.currentTags).forEach((category) => {
              Object.entries(productItems.currentTags[category[0]]).forEach((values) => {
                    productItems.currentTags[category[0]][values[0]] = false;
              })
            })
            productItems.tagsList.length = 0;
        }
    },
    extraReducers: {
        [getProducts.pending]: (productItems) => {
            productItems.isLoading = true;
        },
        [getProducts.fulfilled]: (productItems, { payload }) => {
            productItems.items = payload;
            productItems.categoriesSort = payload;
            productItems.displaySort = payload;
            productItems.isLoading = false;
        },
        [getProducts.rejected]: ({ payload }) => {
            console.log(payload.err);
        }
    }
})
export const { checkLoading, checkCategory, getFeatured, getBestSellers, getSaleProducts, getAllProducts, checkBrand, sortByTags, changeTagChecks, deleteTags, clearFilters, checkSortBy, sortByPrice, getBrandList, changeBrandChecker, getCategoryList,checkByParams,clearAll} = productSlice.actions;

export default productSlice.reducer;


