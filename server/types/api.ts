type Session = { id : string ; code : number }
type Range_ = { fromLine: number; toLine: number }
type Snapshot = { content : string ; range : Range }
type Question = { id : string ; snapshot : Snapshot }
type Answer = { id : string ; text : string }
