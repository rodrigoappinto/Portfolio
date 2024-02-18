'use server'
import { unstable_noStore } from 'next/cache'
import { supabase } from '../app/db/supabase'

export default async function getPhotosUrls() {
    unstable_noStore()

    const { data, error } = await supabase
    .storage
    .from('Portfolio')
    .list('', {
      limit: 100,
      offset: 0,
      sortBy: { column: 'name', order: 'asc' },
    })


    let publicUrls:any = data?.map(async (item) => {   
        const result  = await supabase
        .storage
        .from('Portfolio')
        .getPublicUrl(item.name)
        
        if (result.data.publicUrl.endsWith(".jpg")) return result.data.publicUrl
    })

    return Promise.all(publicUrls).then((values) => values)
}