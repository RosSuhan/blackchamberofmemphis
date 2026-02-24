'use client'
import { FacebookFill } from '@/components/icons/FacebookIcon';
import { GlobeOutline } from '@/components/icons/Globe';
import { Instagram } from '@/components/icons/InstagramIcon';
import { Linkedin2 } from '@/components/icons/LinkedInIcon';
import { LinktreeLogoBold } from '@/components/icons/Linktree';
import { BaselineLocationOn } from '@/components/icons/Location';
import { BaselineMail } from '@/components/icons/MailIcon';
import { Phone } from '@/components/icons/Phone';
import { TiktokIcon } from '@/components/icons/TikTokIcon';
import { TwitterStroke12 } from '@/components/icons/TwitterIcon';
import { Youtube } from '@/components/icons/YoutubeIcon';
import { businessList } from '@/lib/members';
import style from '@/styles/membersPage.module.css'
import clsx from 'clsx';
import Image from 'next/image'
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function MembersPage(){
    const params = useParams();
    const id = params?.id as string;

    const selectedMember = businessList.find(a => a.id === id);

    const longDescription = selectedMember?.profileBusinessDescription

    const [ showGallery, setShowGallery ] = useState(false)

    if(!id) return null;
    if(!selectedMember) {return <p>Business not found.</p>}
    return(
        <main
            className={style.membersPage}
        >
            <section
                className={style.membersBanner}
            >
                {selectedMember.memberStatus ? 
                    <div
                        className={style.memberBadgeRow}
                    >
                        <Image
                            src={"/assets/membersBadge.webp"}
                            alt=''
                            width={900}
                            height={400}
                            className={style.memberBadge}
                        />
                    </div>
                : null}

                {selectedMember.profileLogo? 
                    <Image
                        src={'/members/' + selectedMember.profileLogo + '.webp'}
                        alt={'Business Logo of'}
                        width={325}
                        height={200}
                        className={style.membersLogo}
                    />
                : null}

                <h1
                    className={style.membersTitle}
                >
                    {selectedMember.businessName}
                </h1>

                <div
                    className={style.membersContactBlock}
                >
                    {selectedMember.telNumber?
                        <a 
                            href={"tel:+1" + selectedMember.telNumber}
                            className={style.memberContactLink}
                        >
                            <Phone
                                width={25}
                                height={25}
                                className={style.memberContactIcon}
                            />
                            <span
                                className={style.memberContactLinkText}
                            >
                                {selectedMember.telNumber}
                            </span>
                        </a>
                    : null}

                    {selectedMember.email? 
                        <a 
                            href={"mailto:" + selectedMember.email}
                            className={style.memberContactLink}
                        >
                            <BaselineMail
                                width={25}
                                height={25}
                                className={style.memberContactIcon}
                            />
                            <span
                                className={style.memberContactLinkText}
                            >
                                {selectedMember.email}
                            </span>
                        </a>
                    : null}

                    {selectedMember.address?
                        <a 
                            href={selectedMember.addressLink}
                            className={style.memberContactLink}
                        >
                            <BaselineLocationOn
                                width={25}
                                height={25}
                                className={style.memberContactIcon}
                            />
                            <span
                                className={style.memberContactLinkText}
                            >
                                {selectedMember.address}
                            </span>
                        </a>
                    : null}

                    {selectedMember.website?
                        <a 
                            href={selectedMember.website}
                            className={style.memberContactLink}
                        >
                            <GlobeOutline
                                width={25}
                                height={25}
                                className={style.memberContactIcon}
                            />
                            <span
                                className={style.memberContactLinkText}
                            >
                                {selectedMember.website}
                            </span>
                        </a>
                    : null}
                </div>
            </section>

            <section
                className={style.membersDescriptionBlock}
            >
                <div
                    className={style.socialRow}
                >
                    {selectedMember.facebook?    
                        <a 
                            href={selectedMember.facebook}
                            className={style.socialLink}
                        >
                            <FacebookFill
                                width={25}
                                height={25}
                                fill={"#c7ac38"}
                                className={style.memberSocialIcon}
                            />
                        </a>
                    : null}

                    {selectedMember.instagram?    
                        <a 
                            href={selectedMember.instagram}
                            className={style.socialLink}
                        >
                            <Instagram
                                width={25}
                                height={25}
                                fill={"#c7ac38"}
                                className={style.memberSocialIcon}
                            />
                        </a>
                    : null}

                    {selectedMember.youtube?    
                        <a 
                            href={selectedMember.youtube}
                            className={style.socialLink}
                        >
                            <Youtube
                                width={25}
                                height={25}
                                fill={"#c7ac38"}
                                className={style.memberSocialIcon}
                            />
                        </a>
                    : null}

                    {selectedMember.linkedIn?    
                        <a 
                            href={selectedMember.linkedIn}
                            className={style.socialLink}
                        >
                            <Linkedin2
                                width={25}
                                height={25}
                                fill={"#c7ac38"}
                                className={style.memberSocialIcon}
                            />
                        </a>
                    : null} 
                    
                    {selectedMember.linktree?    
                        <a 
                            href={selectedMember.linktree}
                            className={style.socialLink}
                        >
                            <LinktreeLogoBold
                                width={25}
                                height={25}
                                fill={"#c7ac38"}
                                className={style.memberSocialIcon}
                            />
                        </a>
                    : null} 

                    {selectedMember.twitter?    
                        <a 
                            href={selectedMember.twitter}
                            className={style.socialLink}
                        >
                            <TwitterStroke12
                                width={25}
                                height={25}
                                fill={"#c7ac38"}
                                className={style.memberSocialIcon}
                            />
                        </a>
                    : null} 
                    

                    {selectedMember.tiktok?    
                        <a 
                            href={selectedMember.tiktok}
                            className={style.socialLink}
                        >
                            <TiktokIcon
                                width={25}
                                height={25}
                                fill={"#c7ac38"}
                                className={style.memberSocialIcon}
                            />
                        </a>
                    : null} 
                </div>

                {selectedMember?.gallery && selectedMember?.gallery.length > 0  && (
                    <div
                        className={style.profileButtonBlock}
                    >
                        <button 
                            type="button"
                            className={clsx(showGallery ? style.profileButton : style.profileActiveButton)}
                            onClick={() => setShowGallery(false)}
                        >
                            Information
                        </button>

                        <button 
                            type="button"
                            className={clsx(showGallery ? style.profileActiveButton : style.profileButton)}
                            onClick={() => setShowGallery(true)}
                        >
                            Gallery
                        </button>
                    </div>
                )}
                
                <article
                    className={clsx(showGallery ? style.hide : style.profileDescriptionBlock)}
                >
                    {selectedMember?.profileBusinessDescription  ?
                    <div 
                        dangerouslySetInnerHTML={{__html: longDescription || ""}}
                        className={style.longBusinessDescription}
                    /> : selectedMember.profileDescription}
                </article>

                {selectedMember?.gallery && selectedMember?.gallery.length > 0 && (
                    <div
                        className={clsx(showGallery ? style.masonryGrid : style.hide)}
                    >
                        {selectedMember?.gallery.map((image, index) => (
                            <div
                                key={index}
                                className={style.masonryItem}
                            >
                                <Image
                                    src={`${image.image}`}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                    className={style.gallerImage}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    )
}