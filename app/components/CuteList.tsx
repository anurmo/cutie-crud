interface CuteListProps {
  tasks: ITask[]


}

const CuteList: React.FC<CuteListProps> = ({tasks }) => {

    return <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>example</th>
        </tr>
      </thead>
      <tbody>
      
        <tr className="bg-base-200">
          <td>example</td>
        
          <td>example </td>
        </tr>
      
      
      </tbody>
    </table>
  </div>
}

export default CuteList;