import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";
import { AppConfig } from "@/utils/AppConfig";

const BlogComponent = () => {
  return (
    <Main
      meta={
        <Meta
          title={AppConfig.title}
          description={AppConfig.description}
        />
      }
    >
      <header className="bg-white shadow">
        <div className="container max-w-screen-xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Blog</h1>
        </div>
      </header>
      <main>
        <div className="container max-w-screen-xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="" />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </Main>
  )
};

export default BlogComponent;