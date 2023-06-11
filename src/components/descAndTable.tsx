export default function DescAndTable() {
  return (
    <div className="min-h-[70vh] flex flex-col  items-center">
      <p className="mt-[5%] text-6xl mb-[15px] font-bold">Faites le boin choix</p>
      <p className="w-1/2 text-xl text-center font-medium">
        Nous offrons un service de réparation
        de montres de haute qualité et sans accrocs.
        Prenez rendez-vous aujourd'hui, en trois étapes faciles.
      </p>
      <table className="mt-8 w-[450px] text-xl bg-gray-100 border-separate border-4 table-auto text-center rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-r bg-gray-200 border-b">Réparation</th>
            <th className=" bg-gray-200 border-b">Coût</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-r border-b">Changement de pile</td>
            <td className="py-2 px-4 border-b">$10</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-r border-b">Remplacement du bracelet</td>
            <td className="py-2 px-4 border-b">$20</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-r border-b">Réparation du mécanisme</td>
            <td className="py-2 px-4 border-b">$250</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-r border-b">Changement du verre</td>
            <td className="py-2 px-4 border-b">$99</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-r ">Remplacement des aiguilles</td>
            <td className="py-2 px-4 ">455$</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
