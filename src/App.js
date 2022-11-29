import { useEffect, useState } from 'react';

function App() {
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [gols1, setGols1] = useState('');
  const [gols2, setGols2] = useState('');
  const [apostador, setApostador] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksStorage = localStorage.getItem('@tasks');
    if (tasksStorage) {
      setTasks(JSON.parse(tasksStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleSubmit(e) {
    e.preventDefault();

    setTasks([
      ...tasks,
      {
        time1: time1,
        gols1: gols1,
        time2: time2,
        gols2: gols2,
        apostador: apostador,
      },
      // {  },
    ]);
  }

  function handleClick(index) {
    const tarefas = tasks.slice();
    tarefas.splice(index, 1);
    setTasks(tarefas);
  }

  return (
    <>
      <h1>Cadastrando Bolão</h1>
      <h2>Valor de cada Bolão: R$ 5,00 </h2>
      <h3>Total acumulado: R$ {tasks.length * 5},00</h3>

      <form onSubmit={handleSubmit}>
        <label>Apostador</label>
        <br />
        <input
          type='text'
          placeholder='Digite o nome do Apostador'
          value={apostador}
          onChange={(e) => setApostador(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label>Primeira Seleção</label>
        <br />
        <input
          type='text'
          placeholder='Digite o primeiro País'
          value={time1}
          onChange={(e) => setTime1(e.target.value)}
        />
        <br />
        <input
          type='text'
          placeholder='Digite o número de gols'
          value={gols1}
          onChange={(e) => setGols1(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label>Segunda Seleção</label>
        <br />
        <input
          type='text'
          placeholder='Digite o segundo País'
          value={time2}
          onChange={(e) => setTime2(e.target.value)}
        />
        <br />
        <input
          type='text'
          placeholder='Digite o número de gols'
          value={gols2}
          onChange={(e) => setGols2(e.target.value)}
        />
        <br />
        <br />
        <br />
        <br />

        <button type='submit'>Registrar</button>
      </form>

      <br />
      <br />
      <br />

      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task.time1} ({task.gols1}) x ({task.gols2}) {task.time2} -{' '}
            {task.apostador}{' '}
            {/* <button onClick={() => handleClick}>Exluir Aposta</button> */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
