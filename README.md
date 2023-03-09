# cokolwiek

instalacja linuxa na wsl'u
instalacja dodatków Remote Developement do lokalnego VSC
uruchomienie VSC z poziomu wsl'a ($ code .)

gh auth login
(
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"
)
git add         (staging)
git commit -m   (commit działa na mojej wersji)
git push        (push wysyła do repozytorium)

gdybym coś zpushował a zapomniał o dodaniu do poczekalni czegoś:
    jest komenda na dodanie pliku do ostatniego commita (o ile go nie zpushowałem)
    $ git commit --amend
    $ git push
    powinno się używać tylko jeżeli nie zpushowałem danych