import React from 'react'

type Props = {}

function useCheckoutPayload( payload: string ) {

    const parsedPayload = payload?.split("?")[1]?.split("==") ?? [ undefined ]

    return parsedPayload
    
}

export default useCheckoutPayload