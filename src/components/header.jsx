function Header(){
return(
  <>
<nav>
<ul className="nav-bar">
  <li>TODOS-LIST</li>
  <li>Home</li>
  <li>About</li>
</ul>
</nav>
<div className='input-todo'>
<input id='input-todo' type="text" /><button>Add Todo</button>
</div>
<div className="display-overview">
<div id="todo-Tasks" style={{backgroundColor:'grey',width:'100%',margin:'10px',padding:'13px',borderRadius:"20px"}}>

</div>
<div id="completed-todos" style={{backgroundColor:'grey',width:'100%',margin:'10px',padding:'13px',borderRadius:"20px"}}>

</div>
</div>
</>
)
}
export default Header;