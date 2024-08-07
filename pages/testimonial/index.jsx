import MainLayout from "../../app/layouts/MainLayout";

const Index = () => {

    const PageProps = {
        title: 'Главная',
        description: 'Главная',
        keywords: 'Главная'
    }

    return (
        <MainLayout title={PageProps.title} description={PageProps.description} keywords={PageProps.keywords}>
            <div className="main">
                <div className="container">
                    <h1 className="t-30b text-gray-100">Отзывы наших клиентов</h1>
                </div>
            </div>
        </MainLayout>
    )
}

export default Index
