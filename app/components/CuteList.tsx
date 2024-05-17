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
      {tasks.map(task)=>(
        <tr key={task.id}>
          <td>example1</td>
        
          <td>example2</td>
        </tr>
      
      
      </tbody>
    </table>
  </div>
}

export default CuteList;