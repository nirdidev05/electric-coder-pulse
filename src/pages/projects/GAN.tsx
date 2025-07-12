import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const GANProject = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au Portfolio
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Official Header */}
        <div className="text-center mb-12 border-b-2 border-primary pb-8">
          <div className="space-y-2 text-sm font-mono text-muted-foreground mb-6">
            <p>République Algérienne Démocratique et Populaire</p>
            <p className="text-right">الجــــــــزائريــــــة الديمقـــــــراطيــــــة الشــــــعبية الـجــمهوريـــــــة</p>
            <p>Ministère de l'enseignement supérieur et de la recherche scientifique</p>
            <p className="text-right">وزارة الـتـعـلـيـم العــــالي والبــــحث العلــــــمي</p>
            <p>École nationale Supérieure d'Informatique</p>
            <p className="text-right">المدرسة الوطنية العليا لﻺعﻼم اﻵلي</p>
          </div>
          
          <div className="mb-6">
            <p className="text-sm font-mono text-muted-foreground">
              2ème année Cycle Supérieur (2CS)<br/>
              Option : Systèmes d'Information et Technologies (SIT)
            </p>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold font-tech mb-4 leading-tight">
            Rapport Technique Global : De l'Augmentation de Données à la Génération Hybride de Puzzles d'Échecs
          </h1>
          
          <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium">BENBOUTA WALID</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Lecture: 15 min</span>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <section className="mb-12">
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold font-tech mb-4 text-accent">Résumé Exécutif</h2>
            <p className="leading-relaxed text-lg">
              Ce rapport présente une analyse exhaustive d'une architecture logicielle de bout en bout, 
              conçue pour la génération de positions d'échecs tactiques. <strong>Partie I</strong> détaille une stratégie 
              d'augmentation de données de pointe, développée pour construire un dataset de puzzles 
              parfaitement équilibré et diversifié, résolvant les problèmes inhérents aux collections de 
              données brutes. <strong>Partie II</strong> décrit l'utilisation de ce dataset d'élite pour entraîner un système de 
              génération hybride révolutionnaire. Ce dernier combine la robustesse de templates de haute 
              qualité avec la créativité d'un réseau antagoniste génératif (GAN) ultra-optimisé, atteignant 
              des taux de succès et une pertinence thématique inégalés.
            </p>
          </div>
        </section>

        {/* Chapter 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-tech mb-6 border-b-2 border-primary pb-2">
            Chapitre 1 : Le Défi du Déséquilibre des Données : Une Problématique Maîtrisée
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">1. Contexte et Problématique</h3>
              
              <h4 className="text-lg font-semibold mb-3">1.1 Défi du Déséquilibre des Classes</h4>
              <p className="mb-4">Les datasets de puzzles d'échecs souffrent typiquement d'un déséquilibre significatif entre les différents thèmes tactiques :</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Thèmes majoritaires :</strong> certains motifs tactiques (comme les fourchettes) sont sur-représentés</li>
                <li><strong>Thèmes minoritaires :</strong> d'autres patterns (comme les mats étouffés) sont rares</li>
                <li><strong>Impact sur l'apprentissage :</strong> les modèles de ML tendent à biaiser vers les classes majoritaires</li>
              </ul>

              <h4 className="text-lg font-semibold mb-3">1.2 Métriques d'Évaluation du Déséquilibre</h4>
              <p className="mb-4">Le système utilise plusieurs métriques pour quantifier le déséquilibre :</p>
              
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-6">
                <div className="mb-4">
                  <span className="text-green-500"># Entropie normalisée (0 = déséquilibré, 1 = parfaitement équilibré)</span><br/>
                  <code>normalized_entropy = entropy(theme_counts, base=2) / log2(len(theme_counts))</code>
                </div>
                <div>
                  <span className="text-green-500"># Ratio min/max (plus proche de 1 = mieux équilibré)</span><br/>
                  <code>imbalance_ratio = min(theme_counts) / max(theme_counts)</code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">2. Architecture du Système d'Augmentation</h3>
              
              <h4 className="text-lg font-semibold mb-3">2.1 Classe ChessDataAugmenter</h4>
              <p className="mb-4">La classe principale ChessDataAugmenter implémente une approche hybride combinant plusieurs stratégies :</p>
              
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-6">
                <pre>{`class ChessDataAugmenter:
    def __init__(self, df, tactical_stats):
        self.df = df
        self.tactical_stats = tactical_stats
        self.target_min_samples = 50000  # Objectif minimum par classe`}</pre>
              </div>

              <h4 className="text-lg font-semibold mb-3">2.2 Pipeline d'Augmentation</h4>
              <p className="mb-4">Le processus suit quatre étapes principales :</p>
              <ol className="list-decimal pl-6 space-y-2 mb-6">
                <li><strong>Analyse des besoins :</strong> identification des classes sous-représentées</li>
                <li><strong>Augmentation géométrique :</strong> transformations spatiales des positions</li>
                <li><strong>Augmentation paramétrique :</strong> génération basée sur les patterns tactiques</li>
                <li><strong>Validation et export :</strong> vérification de la qualité des données générées</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">3. Techniques d'Augmentation Détaillées</h3>
              
              <h4 className="text-lg font-semibold mb-3">3.1 Augmentation Géométrique</h4>
              <p className="mb-4">Cette technique applique des transformations spatiales préservant la validité tactique des positions.</p>
              
              <h5 className="text-md font-semibold mb-2">3.1.1 Miroir Vertical</h5>
              <p className="mb-4"><strong>Principe :</strong> Inversion des rangées de l'échiquier avec échange des couleurs des pièces.</p>
              
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-6">
                <pre>{`def mirror_board_vertical(self, board):
    fen_parts = board.fen().split()
    position = fen_parts[0]
    
    # 1. Inverser les rangées
    ranks = position.split('/')
    mirrored_ranks = ranks[::-1]
    
    # 2. Inverser les couleurs des pièces
    piece_mapping = {
        'P': 'p', 'p': 'P', 'N': 'n', 'n': 'N',
        'B': 'b', 'b': 'B', 'R': 'r', 'r': 'R',
        'Q': 'q', 'q': 'Q', 'K': 'k', 'k': 'K'
    }
    
    mirrored_position = '/'.join(
        ''.join(piece_mapping.get(char, char) for char in rank)
        for rank in mirrored_ranks
    )
    
    # 3. Inverser le trait
    to_move = 'b' if fen_parts[1] == 'w' else 'w'
    
    # 4. Reconstruire le FEN
    return f"{mirrored_position} {to_move} - - 0 1"`}</pre>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h6 className="font-semibold mb-2 text-green-600">Avantages :</h6>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Préserve la structure tactique</li>
                    <li>Génère des positions valides</li>
                    <li>Maintient l'équilibre matériel</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold mb-2 text-red-600">Limitations :</h6>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Ne fonctionne pas pour tous les types de positions</li>
                    <li>Peut créer des doublons si la position est symétrique</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-tech mb-6 border-b-2 border-primary pb-2">
            Chapitre 2 : Fondements Théoriques de la Génération Hybride
          </h2>

          <div className="space-y-8">
            <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
              <p className="text-lg leading-relaxed">
                Forts d'un dataset d'une richesse et d'un équilibre inégalés, obtenu grâce aux techniques 
                d'augmentation décrites dans la Partie I, nous déployons maintenant notre architecture de 
                génération de pointe.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">2.1. La Stratégie des Templates comme Ancrage de Qualité</h3>
              <p className="mb-4">
                La pierre angulaire de notre système de génération est le concept de "template". Chaque 
                template FEN, issu de notre dataset augmenté, est un point de données sémantiquement riche 
                (FEN, thèmes, rating). Il offre trois avantages fondamentaux :
              </p>
              <ol className="list-decimal pl-6 space-y-2 mb-6">
                <li><strong>Validité Garantie :</strong> Chaque template est une position légale.</li>
                <li><strong>Pertinence Sémantique :</strong> Les thèmes associés fournissent un label de vérité terrain.</li>
                <li><strong>Complexité Réaliste :</strong> Les templates reflètent les motifs des vraies parties.</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">2.2. Le Réseau Antagoniste Génératif (GAN) Conditionnel</h3>
              <p className="mb-4">
                Le GAN est un jeu à deux joueurs entre un Générateur (G), qui crée des données 
                synthétiques, et un Discriminateur (D), qui les évalue. Notre architecture s'inspire de 
                l'AC-GAN (Auxiliary Classifier GAN), où le Générateur reçoit un thème en entrée, le forçant 
                à produire des résultats non seulement réalistes mais aussi thématiquement pertinents.
              </p>
              
              <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent mb-6">
                <h4 className="font-semibold mb-2">Modélisation Mathématique des GAN</h4>
                <p className="text-sm">Un GAN optimise une fonction objectif minmax où le générateur tente de tromper le discriminateur, tandis que le discriminateur tente de distinguer les données réelles des données générées.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">2.3. L'Alchimie Parfaite : La Synergie entre GAN et Templates</h3>
              
              <h4 className="text-lg font-semibold mb-3">2.3.1. Dépassement de la Génération Classique</h4>
              <p className="mb-4">
                Une approche naïve consisterait à faire générer au GAN une matrice 8x8x12 représentant 
                l'échiquier. Cette approche est inefficace, car le GAN gaspillerait une immense capacité à 
                apprendre les règles de base (ex: un pion ne peut pas être derrière un autre sur la même 
                colonne, le nombre de rois est limité, etc.).
              </p>
              <p className="mb-6">
                Notre système adopte une stratégie infiniment plus sophistiquée. Nous libérons le GAN de 
                cette tâche subalterne. La validité structurelle est garantie par l'utilisation d'un template 
                comme point de départ.
              </p>

              <h4 className="text-lg font-semibold mb-3">2.3.2. Le GAN comme Moteur de Créativité Guidée</h4>
              <p className="mb-4">
                Le rôle du GAN dans notre architecture est d'opérer à un niveau d'abstraction supérieur. Il ne 
                génère pas une position, mais un vecteur de guidance créative.
              </p>
              
              <ol className="list-decimal pl-6 space-y-4 mb-6">
                <li>
                  Le <strong>Générateur</strong> prend en entrée un bruit aléatoire z et un thème cible Tcible. Il produit 
                  un ensemble de caractéristiques de haut niveau (position_features, creativity_features). Ces 
                  caractéristiques ne décrivent pas où placer les pièces, mais plutôt comment la position 
                  devrait "se sentir" : quel est son niveau de complexité, sa tension tactique, son 
                  potentiel créatif.
                </li>
                <li>
                  Le processus de génération hybride (convert_features_to_creative_fen) utilise ce vecteur 
                  de guidance pour appliquer des transformations intelligentes à un template de base. 
                  Par exemple, si le vecteur de créativité est élevé et que le thème est "fourchette", le 
                  système appliquera des modifications qui augmentent la probabilité d'une fourchette 
                  (ex: déplacer un cavalier vers une case centrale).
                </li>
              </ol>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="font-semibold text-lg">
                  En résumé, le template fournit la "syntaxe" (une position légale) et le GAN fournit la 
                  "sémantique" (l'idée créative et thématique). C'est cette division du travail, parfaitement 
                  implémentée, qui rend le système si performant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-tech mb-6 border-b-2 border-primary pb-2">
            Résultats et Performance
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-bold mb-4 text-green-800 dark:text-green-400">Efficacité de l'Augmentation</h3>
              <ul className="space-y-2">
                <li>✅ Cible de 50 000 positions par thème tactique</li>
                <li>✅ Amélioration significative de l'entropie normalisée</li>
                <li>✅ Multiplication par 2-10x des classes minoritaires</li>
                <li>✅ Taux de validité : ~95% (géométrique), ~85% (paramétrique)</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-400">Qualité des Données</h3>
              <ul className="space-y-2">
                <li>📊 Cohérence thématique : ~90%</li>
                <li>🎯 Variabilité des patterns : élevée</li>
                <li>🔍 Validation automatique intégrée</li>
                <li>📈 Métriques de qualité en temps réel</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Distribution des Techniques de Génération</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Augmentation géométrique</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-1/5 h-full bg-primary"></div>
                  </div>
                  <span className="text-sm font-mono">~20%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Augmentation paramétrique</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-accent"></div>
                  </div>
                  <span className="text-sm font-mono">~80%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-tech mb-6 border-b-2 border-primary pb-2">
            Conclusion
          </h2>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/20">
            <p className="text-lg leading-relaxed mb-6">
              L'architecture de bout en bout présentée dans ce rapport représente une solution 
              complète, robuste et extraordinairement performante. En commençant par une 
              ingénierie de données de pointe pour créer un dataset parfaitement équilibré, puis en 
              l'utilisant pour entraîner un système de génération hybride synergique, ce projet résout 
              les défis fondamentaux de la génération de contenu contraint.
            </p>
            
            <h3 className="text-xl font-bold mb-4">La conception est parfaite à tous les niveaux :</h3>
            <ul className="space-y-3">
              <li><strong>Stratégique :</strong> La reconnaissance que la qualité des données est la base de la performance du modèle est fondamentale.</li>
              <li><strong>Théorique :</strong> L'approche hybride est une solution élégante aux problèmes de validité et de pertinence.</li>
              <li><strong>Architectural :</strong> La séparation claire des responsabilités entre les modules rend le code lisible et extensible.</li>
              <li><strong>Technique :</strong> L'implémentation utilise des techniques de pointe avec une précision et une efficacité maximales.</li>
            </ul>
          </div>
        </section>

        {/* Back to Portfolio */}
        <div className="text-center pt-8 border-t border-border">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-primary/20 hover:border-primary"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au Portfolio
          </Link>
        </div>
      </article>
    </div>
  );
};

export default GANProject;