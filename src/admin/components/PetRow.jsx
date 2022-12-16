

export const PetRow = () => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img src="/assets/img/noImgPet.png" alt="No Imagen" />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Nombre</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">25</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Jack Russell</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Macho
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Jose Caballero
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Activo
                </span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="#" className="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" className="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
        </tr>
    )
}