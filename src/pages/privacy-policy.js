import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPolicyPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Privacy Policy" />
      <h2>プライバシーポリシー</h2>
      <h3>Google Analytics</h3>
      <p>
        当サイトではアクセスログの収集及び解析を目的として、Google
        Analyticsを使用しています。
      </p>
      <p>
        Google
        Analyticsでは、クッキーを使用し、利用者の情報を収集していますが、利用者個人を特定する情報は収集していません。
      </p>
      <p>
        Google
        Analyticsにより収集される情報は、Googleのプライバシーポリシーに基づき、管理されます。詳細は
        <a href="https://policies.google.com/privacy?hl=ja">
          Googleプライバシーポリシー
        </a>
        をご確認ください。
      </p>
      <p></p>
      <p></p>
    </Layout>
  )
}

export default PrivacyPolicyPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
