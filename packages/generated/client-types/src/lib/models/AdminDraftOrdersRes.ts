/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SetRelation, Merge } from "../core/ModelUtils"

import type { Cart } from "./Cart"
import type { Discount } from "./Discount"
import type { DraftOrder } from "./DraftOrder"
import type { LineItem } from "./LineItem"
import type { Region } from "./Region"
import type { ShippingMethod } from "./ShippingMethod"

export interface AdminDraftOrdersRes {
  draft_order: Merge<
    SetRelation<DraftOrder, "order" | "cart">,
    {
      cart: Merge<
        SetRelation<
          Cart,
          | "items"
          | "billing_address"
          | "customer"
          | "discounts"
          | "payment"
          | "payment_sessions"
          | "region"
          | "shipping_address"
          | "shipping_methods"
        >,
        {
          items: Array<SetRelation<LineItem, "adjustments">>
          discounts: Array<SetRelation<Discount, "rule">>
          region: SetRelation<
            Region,
            "payment_providers" | "fulfillment_providers"
          >
          shipping_methods: Array<
            SetRelation<ShippingMethod, "shipping_option">
          >
        }
      >
    }
  >
}
