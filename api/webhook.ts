import config from '../config.json'
import { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

export default async (request: VercelRequest, response: VercelResponse) => {
    const { subscription_plan_id } = request.body

    if (! config.mappings[subscription_plan_id]) {
        return response.status(404).json({
            success: false,
            error: 'Subscription ID does not have a valid mapping.'
        })
    }

    const target = config.mappings[subscription_plan_id]
    let proxy;

    try {
        proxy = await axios.post(target, request.body)
    } catch (e) {
        return response.status(500).send(e)
    }

    return response.status(200).json({
        success: true,
        subscription_plan_id,
        response: proxy.data
    })
}