import { Return } from "./../../../../models/return"
import { Router } from "express"
import middlewares from "../../../middlewares"

const route = Router()

export default (app) => {
  app.use("/returns", route)

  route.post("/", middlewares.wrap(require("./create-return").default))

  return app
}

/**
 * @schema StoreReturnsRes
 * type: object
 * x-expanded-relations:
 *   field: return
 *   eager:
 *     - items
 *   implicit:
 *     - items.reason
 * required:
 *   - return
 * properties:
 *   return:
 *     $ref: "#/components/schemas/Return"
 */
export type StoreReturnsRes = {
  return: Return
}

export * from "./create-return"
