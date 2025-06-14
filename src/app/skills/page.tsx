"use client"
import RevealOnScroll from '@/animations/page'
import React from 'react'
import { techStackIcons } from '../data/data'
import Image from 'next/image';
interface StackImages {
  id: number;
  url: any;
  description: string;
}

const Skills = () => {
  return (
      <RevealOnScroll variant="fadeIn">
        <section className="flex flex-col items-center gap-6 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">MY TECH STACK</h2>
            <p className="text-lg text-[#ccc]">
              Technologies I’ve been working with recently
            </p>
          </div>
          <ul className="w-full max-w-7xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 p-6 bg-[#080808] rounded-lg">
            {techStackIcons.map((items: StackImages) => (
              <li
                key={items.id}
                className="flex flex-col items-center justify-center space-y-2"
              >
                <Image
                  src={items.url}
                  alt={items.description}
                  width={50}
                  height={50}
                />
                <p className="text-sm text-center">{items.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </RevealOnScroll>

  )
}

export default Skills