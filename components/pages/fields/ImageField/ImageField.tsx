import * as React from 'react'
import { FC } from 'react'
// import Image from 'next/image'

export interface ImageFieldProps {
  downloadUrl: string
  title: string
  width: number
  height: number
  fileSize: number
}

const ImageField: FC<ImageFieldProps> = ({ downloadUrl, title }) => {
  // return <Image src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${downloadUrl}`} alt={title} />
  return <img src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${downloadUrl}`} alt={title} />
}

export default ImageField
