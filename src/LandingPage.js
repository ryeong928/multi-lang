import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from "i18next";

export default function LandingPage(){
    const { t }  = useTranslation(['page'])
    
    const onChangeLang = () => i18n.changeLanguage('ko')

    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh'
        }}>
            <h2>{t('page:startPage')}</h2>
            <button onClick={onChangeLang}>Change Language</button>
        </div>
    )
}