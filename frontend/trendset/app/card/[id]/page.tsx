'use client'
import Image from 'next/image'
import { useQuery } from 'react-query'
import { notFound } from 'next/navigation'

interface dataResponse {
    id: number,
    logo: string,
    bio: string,
    links: {
        text: string
        url:string
    }[],
    design: {
        card_color: string
        window_color: string
        text_font: string
        text_color: string
    }
}

export default function Page({ params }: { params: { id: string } }) {
    const {data, isLoading, isError} = useQuery<dataResponse>([],async () => {
        return fetch(`/${params.id}`).then((response) => { return response.json()})
    },{
        retry: 2
    })

    document.body.style.backgroundColor = data?.design.window_color || 'white'

    if (isLoading) {
        return 'Loading...'
    }

    if(!data || isError){
        document.body.style.backgroundColor = 'black'
        notFound()
    }

    return <div style={{color:`${data.design.card_color}`}}>
        <Image src={data.logo} alt='Business Logo'></Image>
        <h1 className={`decoration-[${data.design.text_color}]`}>Business Name</h1>
        <p>{data.bio}</p>
        <div className={`decoration-[${data.design.text_color}]`}>Links</div>
        {
            data.links.map((link) => {
                return <a href={link.url}>{link.text}</a>
            })
        }
    </div>
}