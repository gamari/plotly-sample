# 概要

Django + React + Plotlyで作成したサンプルコードです。

## 事前準備

それぞれのディレクトリ内で準備を行って下さい。

- frontend
  - コマンドの実行
    - npm install
- backend
  - 仮想環境の構築（任意）
    - Anacondaまたはvenvなどを利用して仮想環境を構築してください。
  - コマンドの実行
    - pip install -r requirements.txt
  - マイグレーションの実行
    - python manage.py migrate

## 準備

- python -m venv venv
- インタープリターの設定
  - Shift + Command + P
  - venvを指定する
- ターミナルを削除して、起動し直すと、venvが有効になります。
- python -m pip install -r requirements.txt
- python manage.py migrate
- python manage.py runserver


