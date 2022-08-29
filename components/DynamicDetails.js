import dynamic from 'next/dynamic'

const DynamicDetails = dynamic(() => import('./Details'), {
    ssr: false,
})

export default DynamicDetails