import { Request, Response } from "express"
import { vitest } from "vitest"

export const fakeRequest = () => {
    const req = {} as Request
    req.body = vitest.fn().mockReturnValue(req) as unknown as Request["body"]  
    req.params = vitest.fn().mockReturnValue(req) as unknown as Request["params"]
    req.query = vitest.fn().mockReturnValue(req) as unknown as Request["query"]
    req.headers = vitest.fn().mockReturnValue(req) as unknown as Request["headers"]
    return req 
}

export const fakeResponse = () => {
    const res = {} as Response
    res.status = vitest.fn().mockReturnValue(res) as unknown as Response["status"]
    res.json = vitest.fn().mockReturnValue(res) as unknown as Response["json"]
    return res
}