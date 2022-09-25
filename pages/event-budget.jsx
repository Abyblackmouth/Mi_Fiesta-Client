import Button from '../components/Button';
import FormCustomer from '../components/FormCustomer';
import Layout from '../components/Layout';
import Steps from '../components/Steps';
import Title from '../components/Title';
import Input from '../components/Input';

export default function EventBudget() {
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center space-y-10">
          <Steps step="w-1/2" />
          <Title children={'Cotiza tu evento'} />
        </div>
        <div className="flex flex-col items-center justify-between  p-6 bg-pink-400">
          <div className="flex items-center justify-center mb-4 bg-blue-400">hola 1</div>

          <div className="flex items-center justify-center mb-4 bg-yellow-400">hola 2</div>
        </div>
        {/* <Input /> */}
      </Layout>
    </>
  );
}