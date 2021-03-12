import { createStore } from "easy-peasy";

import BucketModel from "./bucketModel";
import ItemModel from "./itemModel";

const store = createStore({
  buckets: BucketModel,
  shoppingItems: ItemModel
});

export default store;
