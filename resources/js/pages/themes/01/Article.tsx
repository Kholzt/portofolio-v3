import React from 'react'
import Navbar from './Navbar'
import { ArticlesProps, CategoryProps } from './../../../types/all';
import { Head } from '@inertiajs/react';
import { formatDate } from './../../../helpers/helpers';

const Article = ({ data }: { data: { articles: ArticlesProps[], categories: CategoryProps[] } }) => {

    return (
        <div className="bg-gray-800 text-white min-h-screen">
            <Navbar />
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            {/* <div ref={circleRef} className="circle bg-green-600 md:w-[20%] w-[50%] translate-x-[50%]  rounded-full fixed aspect-square opacity-50 blur-3xl"></div> */}

            <Head title="Portofolio" />
            <div className="container">
                <div className={`grid md:grid-cols-8`}>
                    <div className={`transition-all duration-300 md:col-span-2 md:block hidden`}>
                        <section className={`md:sticky top-0 left-0   overflow-y-auto snap-y snap-mandatory`}>
                            <h2 className='font-bold text-4xl '>Article</h2>
                            <p className='text-sm text-slate-300'> browse the various articles according to your needs</p>
                            <h3 className='mt-6 text-lg mb-2'>Categories</h3>
                            <ul className='flex flex-wrap gap-4'>
                                {data.categories.map((category, index) => {
                                    return <li key={index} className='text-slate-300'>{category.name} <span className="inline-flex  items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">{category.articles.length}</span>
                                    </li>;
                                })}
                            </ul>
                        </section>
                    </div>

                    <div className={`main snap-y snap-mandatory overflow-y-auto md:col-span-5 md:col-start-4`}>
                        <section id="articles" className="snap-start">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                                {data.articles.map((article, index) => {
                                    return <article key={index}>
                                        <img src={"storage/" + article.thumbnail} alt={article.title} className='img-fluid rounded-md aspect-video' />
                                        <h3 className='mt-2 font-bold text-sm' >{article.title}</h3>
                                        <small className='text-xs text-slate-300'>{formatDate(article.published_at)}</small>
                                    </article>;
                                })}
                            </div>
                        </section>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
