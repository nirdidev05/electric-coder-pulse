"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Database, ChevronDown, FlipHorizontal, Cpu } from "lucide-react"
import { CodeSample } from "../code-sample"

interface DataAugmentationSectionProps {
  expandedCards: Record<string, boolean>
  toggleCard: (id: string) => void
}

export function DataAugmentationSection({ expandedCards, toggleCard }: DataAugmentationSectionProps) {
  return (
    <div className="space-y-8">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database size={24} />
            <span>Stratégies d'Augmentation Avancées</span>
          </CardTitle>
          <CardDescription>
            Approches complémentaires pour enrichir le corpus et équilibrer les thèmes tactiques rares
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <FlipHorizontal size={20} className="text-primary" />
                  <h4 className="font-semibold text-primary">Augmentations Géométriques</h4>
                </div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>
                    • <strong>Miroir Horizontal:</strong> Échange colonnes a↔h, b↔g, préservation à 98% des relations
                    tactiques
                  </li>
                  <li>
                    • <strong>Rotation 180°:</strong> Symétrie centrale + inversion des couleurs, génère puzzles
                    "miroir"
                  </li>
                  <li>
                    • <strong>Taux de Validité:</strong> ~95% (transformations préservent la légalité)
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu size={20} className="text-secondary" />
                  <h4 className="font-semibold text-secondary">Augmentations Paramétriques</h4>
                </div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>
                    • <strong>Génération de Mats:</strong> Placement intelligent de pièces attaquantes (Dame, Tour, Fou)
                  </li>
                  <li>
                    • <strong>Insertion de Fourchettes:</strong> Cavaliers sur cases créant double menace
                  </li>
                  <li>
                    • <strong>Création de Clouages:</strong> Alignement pièces longue portée + roi adverse
                  </li>
                  <li>
                    • <strong>Taux de Validité:</strong> ~85% (vérification post-génération)
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                <h4 className="font-semibold mb-3 text-accent">Résultats Quantitatifs</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-center p-2 bg-background rounded">
                    <div className="font-bold text-lg text-primary">50,000</div>
                    <div className="text-muted-foreground">Puzzles/thème</div>
                  </div>
                  <div className="text-center p-2 bg-background rounded">
                    <div className="font-bold text-lg text-secondary">2-10x</div>
                    <div className="text-muted-foreground">Multiplication classes rares</div>
                  </div>
                  <div className="text-center p-2 bg-background rounded">
                    <div className="font-bold text-lg text-accent">90%</div>
                    <div className="text-muted-foreground">Cohérence thématique</div>
                  </div>
                  <div className="text-center p-2 bg-background rounded">
                    <div className="font-bold text-lg text-primary">2.8x</div>
                    <div className="text-muted-foreground">Amélioration entropie</div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Équilibrage Matériel</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Diversification des paramètres globaux : équilibre matériel, activité des pièces, mobilité
                </p>
                <div className="font-mono text-xs bg-background p-2 rounded">
                  Ratio_mobilité = (#coups_Blancs + 1) / (#coups_Noirs + 1)
                </div>
              </div>
            </div>
          </div>

          {expandedCards.dataAugDetails && (
            <div className="mt-6 pt-6 border-t space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Implémentation des Transformations Géométriques</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Les transformations sont appliquées directement au niveau du tenseur 8×8×N. Pour le miroir horizontal,
                  inversion des indices de colonnes (0↦7, 1↦6, ...). Pour la rotation 180°, combinaison flip
                  vertical+horizontal + échange des canaux pièces blanches/noires.
                </p>

                <div className="bg-background/80 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Pseudo-code Rotation 180°</h5>
                  <div className="font-mono text-xs bg-muted p-3 rounded">
                    new_index = 63 - old_index // Symétrie centrale
                    <br />
                    piece_white ↔ piece_black // Échange couleurs
                    <br />
                    trait = !trait // Inversion du trait
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Génération Thématique Spécialisée</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-primary/5 p-3 rounded border border-primary/20">
                    <h5 className="font-medium text-primary mb-1">Mat en 1 Coup</h5>
                    <p className="text-xs text-muted-foreground">
                      1. Identifier roi ennemi
                      <br />
                      2. Analyser cases d'attaque
                      <br />
                      3. Placer pièce offensive
                      <br />
                      4. Vérifier mat imparable
                    </p>
                  </div>
                  <div className="bg-secondary/5 p-3 rounded border border-secondary/20">
                    <h5 className="font-medium text-secondary mb-1">Fourchette</h5>
                    <p className="text-xs text-muted-foreground">
                      1. Placer Cavalier case vide
                      <br />
                      2. Vérifier attaque ≥2 pièces
                      <br />
                      3. Privilégier Roi + pièce lourde
                      <br />
                      4. Valider absence défense
                    </p>
                  </div>
                  <div className="bg-accent/5 p-3 rounded border border-accent/20">
                    <h5 className="font-medium text-accent mb-1">Clouage</h5>
                    <p className="text-xs text-muted-foreground">
                      1. Localiser roi adverse
                      <br />
                      2. Placer Tour/Fou aligné
                      <br />
                      3. Insérer pièce intermédiaire
                      <br />
                      4. Vérifier immobilisation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => toggleCard("dataAugDetails")}
            className="mt-4 text-sm flex items-center gap-1 text-primary"
          >
            {expandedCards.dataAugDetails ? "Masquer les détails" : "Afficher l'implémentation détaillée"}
            <ChevronDown size={16} className={expandedCards.dataAugDetails ? "rotate-180" : ""} />
          </button>
        </CardContent>
      </Card>

      <CodeSample
        title="Génération Paramétrique - Insertion de Fourchette"
        code={`def generate_fork_puzzle(board, theme_params):
    """Génère un puzzle de fourchette en plaçant stratégiquement un cavalier"""
    
    # 1. Identifier les cases vides candidates
    candidate_squares = [sq for sq in chess.SQUARES 
                        if board.piece_at(sq) is None]
    
    # 2. Tester chaque position pour le cavalier
    for square in candidate_squares:
        # Placer temporairement un cavalier
        test_board = board.copy()
        knight = chess.Piece(chess.KNIGHT, board.turn)
        test_board.set_piece_at(square, knight)
        
        # 3. Analyser les attaques du cavalier
        attacked_squares = list(test_board.attacks(square))
        enemy_pieces = [test_board.piece_at(sq) for sq in attacked_squares 
                       if test_board.piece_at(sq) and 
                       test_board.piece_at(sq).color != board.turn]
        
        # 4. Vérifier condition de fourchette (≥2 pièces attaquées)
        if len(enemy_pieces) >= 2:
            # Priorité aux fourchettes Roi + pièce lourde
            has_king = any(piece.piece_type == chess.KING 
                          for piece in enemy_pieces)
            has_heavy_piece = any(piece.piece_type in [chess.QUEEN, chess.ROOK] 
                                 for piece in enemy_pieces)
            
            if has_king or has_heavy_piece:
                # 5. Validation finale avec moteur
                if validate_fork_solution(test_board, square):
                    return test_board.fen(), {
                        'fork_square': chess.square_name(square),
                        'attacked_pieces': len(enemy_pieces),
                        'quality_score': calculate_fork_quality(enemy_pieces)
                    }
    
    return None, None

def validate_fork_solution(board, knight_square):
    """Valide que la fourchette est effectivement gagnante"""
    # Vérifier qu'aucune défense ne neutralise la double menace
    for move in board.legal_moves:
        board.push(move)
        # Si après la défense, le cavalier attaque encore ≥1 pièce importante
        remaining_attacks = count_valuable_attacks(board, knight_square)
        board.pop()
        
        if remaining_attacks == 0:
            return False  # Défense trouvée
    
    return True  # Fourchette gagnante confirmée`}
        references={[
          "Lichess Puzzle Database - Thematic Classification and Validation",
          "Chess Programming Wiki - Tactical Pattern Recognition",
          "Stockfish Engine - Position Evaluation and Move Generation",
          "Python-chess Library - Board Manipulation and Legal Move Validation",
        ]}
      />
    </div>
  )
}
