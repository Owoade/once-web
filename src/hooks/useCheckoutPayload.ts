import React from 'react'

type Props = {}

function useCheckoutPayload( payload: string ) {

    const parsedPayload = payload.split("?")[1].split("==") ?? ["no-group", "no-group"]

    return parsedPayload
    
}

export default useCheckoutPayload